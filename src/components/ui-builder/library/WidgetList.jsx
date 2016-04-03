import React, {Component, PropTypes} from 'react';
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
    const result = [];
    let count = 0;
    for(let group in widgetList) {
      if(this.shouldRenderSeparator(count)) {
         result.push(<div key={count} className="list-group-separator"></div>);
      }

      result.push(this.renderItemInGroup(widgetList[group]));
      count += 1;
    }

    return result;
  }

  shouldRenderSeparator(count) {
    return count > 0;
  }

  renderItemInGroup(group) {
    return group.widgets.map((widget, i) => {
      return <WidgetListItem key={i} widget={widget} />
    });
  }
}

WidgetList.propTypes = {
  widgetLib : PropTypes.object
};
