// add starts_with function to string
if (typeof String.prototype.starts_with != 'function') {
    String.prototype.starts_with = function (str){
        if(is_empty(str)) return false
        return this.slice(0, str.length) == str;
    };
}

// Array & object helpers

function is_empty(item) {
    return (item == undefined || item == null || item.length == 0);
}

function is_empty_hash(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}

// sort on key values
function key_sort(key) {
    return function(a, b) {
        if(a[key] < b[key]) return -1;
        if(a[key] > b[key]) return 1;
        return 0;
    }
}

// returns a shallow copy of obj
function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function copy_attributes(source, target) {
    for(var key in source) {
        target[key] = source[key]
    }
}

function keys_are_equal(source, target) {
    for(var key in source) {
        if(target[key] !== source[key]) {
            return false;
        }
    }
    return true;
}

// returns an array of incremental numbers
// this is used for generating arrays of certain sizes
// e.g. if you need an array of size 9, pass in number_array(9)
// the return array will be [0, 1, 2, 3, 4, 5, 6, 7, 8]
function number_array(size) {
    var arr = [];
    for(var i = 0; i < size; i++) {
        arr.push(i);
    }
    return arr;
}

// add last() function to arrays
if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};

if (!Array.prototype.remove){
    Array.prototype.remove = function(item){
        this.splice(this.indexOf(item), 1)
    };
};


if (!Array.prototype.find_by_key){
    Array.prototype.find_by_key = function(key, value){
        for(var i = 0; i < this.length; i++) {
            if(this[i][key] == value) {
                return this[i];
            }
        }
        return undefined;
    };
};


if (!Array.prototype.find_index_by_key){
    Array.prototype.find_index_by_key = function(key, value){
        for(var i = 0; i < this.length; i++) {
            if(this[i][key] == value) {
                return i;
            }
        }
        return undefined;
    };
};



if (!Array.prototype.find_by_index){
    Array.prototype.find_by_index = function(index, value){
        if(is_empty(value)) {
            return undefined;
        }
        for(var i = 0; i < this.length; i++) {
            if(this[i][index] == value) {
                return this[i];
            }
        }
        return undefined;
    };
};


if (!Array.prototype.find_by_id){
    Array.prototype.find_by_id = function(item_id){
        for(var i = 0; i < this.length; i++) {
            if(parseInt(this[i].id) === parseInt(item_id)) {
                return this[i];
            }
        }
        return undefined;
    };
};


if (!Array.prototype.find_index_by_id){
    Array.prototype.find_index_by_id = function(item_id){
        for(var i = 0; i < this.length; i++) {
            if(parseInt(this[i].id) === parseInt(item_id)) {
                return i;
            }
        }
        return undefined;
    };
};

if (!Array.prototype.remove_by_id){
    Array.prototype.remove_by_id = function(item_id){
        for(var i = 0; i < this.length; i++) {
            if(parseInt(this[i].id) === parseInt(item_id)) {
                this.splice(i, 1)
                break;
            }
        }
    };
};

if (!Array.prototype.update_by_id){
    Array.prototype.update_by_id = function(item){
        var item_updated = false
        for(var i = 0; i < this.length; i++) {
            if(parseInt(this[i].id) === parseInt(item.id)) {
                this[i] = item
                item_updated = true
                break;
            }
        }
        return item_updated
    };
};

// returns a blank hash, with a placeholder value
// this is so rails will not throw a "param is missing or the value is empty" error
// if the user submits without filling in any values
function blank_hash() {
    return {
        blank_placholder_value: "-"
    };
}