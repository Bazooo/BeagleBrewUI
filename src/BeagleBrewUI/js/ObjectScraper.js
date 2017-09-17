class ObjectScraper {

    /**
     * Returns the bottom object with the specified key and value
     * @param  {Object}     obj Object to be scraped
     * @param  {String}     k   Key of the variable
     * @param  {Variable}   v   Unique value of the key
     * @return {Object}         Object with the key and value
     */
    scrape(obj, k, v) {
        for(const key in obj) {
            let value = obj[key];
            if(typeof value === "object") {
                let ans = this.scrape(value, k, v);
                if(ans[k] === v) return ans;
            } else if(key === k && value === v)
                return obj;
        }
        return false;
    }
}

const objectScraper = new ObjectScraper();

export default objectScraper;
