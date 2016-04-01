# Tools used to bind tree structured action creators with dispatch

### Action Creator
``` javascript
export const actionCreator = {
    "acHome": {
        "acEditPanel": {
            "acHeader": {
                switchPanelHeaderTab: function(tab) { return { type: EDITPANEL_SWITCH_TAB, tab } }
            },
            "acLayout": {
                switchRow: function(sourceId, targetId) { return { type: EDITPANEL_SWITCH_ROW, sourceId, targetId } }
            },
            "acElements": {
                editPanelLeaveRow: function(id) { return { type: EDITPANEL_LEAVE_ROW, id } }
            },
            "acInspector": {
                editProps: function(key, val) { return { type: EDITPANEL_EDIT_PROP, key, val } }
            }
        }
    }
}
```

### Connect
```javascript
import wrapDisptachTree from 'wrap-dispatch-tree';
import { actionCreator } from 'redux/'
@connect(state => ({
    data: state.data
}), wrapDisptachTree(actionCreator))
```


that's all



