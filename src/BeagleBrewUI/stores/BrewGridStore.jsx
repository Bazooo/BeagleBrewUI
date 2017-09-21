import {EventEmitter} from "events";
import dispatcher from "../../dispatcher";
import * as CST from "../js/constants";
import ObjectScraper from "../js/ObjectScraper";

import brewAssets from "../../exampleDB/gridLayout.json";

import exampleStatus from "../../exampleDB/defaultStatus.json";
import SocketCom from "../js/SocketCom";

class BrewGridStore extends EventEmitter {
    constructor() {
        super();
        this.brewAssets = brewAssets;
        this.assetStatus = exampleStatus; // Will be updated by the server

        this.tankGrid = null;
        this.activeAsset = null;

        //Create socket if not already created
        if (!this.socket)
            this.socket = new SocketCom();
    }

    // Actions / Emitters

    changeData(data) {
        // this.assetGrid[data.y - 1][data.x - 1] = data;
        this.emit("change");
    }

    flowData() {
        if (this.activeAsset !== null) {
            this.updateActiveAsset();
            this.emit("Flowing Data");
        }
    }

    startDataFlow(id) {
        if (this.activeAsset === null) {
            this.activeAsset = ObjectScraper.scrape(this.assetStatus, "id", id);

            this.emit("Toggle Control Panel");
            this.flowData();
        }
    }

    stopDataFlow() {
        this.activeAsset = null;
        this.emit("Toggle Control Panel");
    }

    changeTemp(id, key, value) {
        let result = ObjectScraper.scrape(this.assetStatus, "id", id);
        let data = result.data;
        //emit to client
        data[key] = Number.parseFloat(value);

        //emit to server
        switch (result.parent) {
            case "Tanks":
                this.socket.updateTank(id, data.setTemp, data.controllerStatus);
                break;
            default:
        }
        this.flowData();
        this.emit("change");
    }

    toggleAsset(id, key, value) {
        // check asset status in this.assetStatus
        let result = ObjectScraper.scrape(this.assetStatus, "id", id);
        let state = result.data;
        // toggle status
        if (!key || !value)
            state.status = state.status ? 0 : 1;
        else if (key === "status" && value)
            state.status = Number.parseInt(value, 10);
        // emit to server for supported toggle assets
        switch (result.parent) {
            case "Valves":
                this.socket.updateValve(id, state.status);
                break;
            case "Pumps":
                this.socket.updatePump(id, state.status);
                break;
            default:
        }
        this.flowData();
        // emit to UI client
        this.emit("change");
    }

    // Getters
    getBrewAssets() {
        return this.brewAssets;
    }

    getAssetStatus(id) {
        const clone = Object.assign({}, this.assetStatus);
        if (typeof id !== "undefined") return ObjectScraper.scrape(clone, "id", id);
        return clone;
    }

    updateActiveAsset() {
        const id = this.activeAsset.data.id;
        this.activeAsset = ObjectScraper.scrape(this.assetStatus, "id", id);
    }

    getDataFlow() {
        return this.activeAsset;
    }

    // Handlers
    handleActions(action) {
        switch (action.type) {
            // case CST.INIT_GRID:
            //     this.initializeGrid(action.assetGrid, action.tankGrid);
            //     break;
            case CST.REQUEST_DATAFLOW:
                this.startDataFlow(action.id);
                break;
            case CST.STOP_DATAFLOW:
                this.stopDataFlow();
                break;
            case CST.CHANGE_DATA:
                //TODO: Is this still necessary?
                this.changeData(action.data);
                break;
            case CST.CHANGE_STATES:
                this.assetStatus = action.data;
                this.emit("change");
                this.flowData();
                break;
            case CST.TOGGLE_ASSET:
                this.toggleAsset(action.id, action.key, action.value);
                break;
            case CST.CHANGE_TEMP:
                this.changeTemp(action.id, action.key, action.value);
                break;
            default:
        }
    }
}

const brewGridStore = new BrewGridStore();
dispatcher.register(brewGridStore.handleActions.bind(brewGridStore));

export default brewGridStore;
