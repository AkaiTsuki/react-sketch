import React, {Component} from 'react';
import WidgetListItem from './WidgetListItem';

export default class WidgetList extends Component {
  render() {
    const {widgetLib} = this.props;

    return (
      <div className="list-group">
        {this.renderGroups(widgetLib)}
      </div>
    );
  }

  renderGroups(widgetList) {
    const groups = [];
    for(let group in widgetList) {
      groups.push(this.renderItemInGroup(widgetList[group]));
    }
    return groups;
  }

  renderItemInGroup(group) {
    return group.widgets.map((widget, i) => {
      return <WidgetListItem key={i} widget={widget} />
    });
  }
}
