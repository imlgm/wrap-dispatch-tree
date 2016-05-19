var _ = require('lodash');

function mapTreeDispatch(actionCreators) {
    return function(dispatch){
        const looper = function(obj){
            _.forEach(obj, function(val, key, thisObj){
                if(typeof(val) === 'object') looper(val);
                if(typeof(val)==='function') thisObj[key] = function(){
                    dispatch(val.apply(this,arguments))
                }
            })
        };
        looper(actionCreators);
        return actionCreators;
    }
}


module.exports = mapTreeDispatch;
