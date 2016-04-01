# this tool is used to bind tree structured action creators with dispatch

### demo
``` javascrip
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
        },
        "acViewer": {
            viewerClickComponent: function(id) { return { type: VIEWER_CLICK_COMPONENTS, id } }
        }
    }
}
```

```
import wrapObjByDispatch from '@beisen/map-tree-dispatch';
import { actionCreator } from 'redux/modules/uiBuilder'
@connect(state => ({
    uiBuilderData: state.uiBuilderData
}), wrapObjByDispatch(actionCreator))
```


that's all



