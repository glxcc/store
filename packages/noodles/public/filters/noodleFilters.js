/**
 * Created by xuejiaowang on 26/07/2014.
 */

/**
 * return unique values of key 'propertyName' in data
 */
angular.module('noodleFilters',[]).
    filter("unique", function(){
        return function(data, propertyName){
            if(angular.isArray(data) && angular.isString(propertyName)){
                var results =[];
                var keys = {};
                for(var i= 0; i<data.length; i++){
                    keys[val] = data[i][propertyName];
                    if(angular.isUndefined(keys[val])){
                        keys[val] = true;
                        results.push(val);
                    }
                }
                return results;

            } else {
                return data;

            }

        }
    })
