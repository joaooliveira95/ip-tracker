import React, { useState } from 'react';

const MyTabsComponent = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    if (!children || React.Children.count(children) === 0) {
        return;
    }

    return <div className="tabs">
        {children?.map((tab, index) => {
            if (!tab?.props?.title) return
            return (
                <button className={`btn ${index === activeTab ? 'btn-active' : ''}`}
                    onClick={() => handleTabClick(index)}
                    disabled={index === activeTab}>{tab.props.title}</button>
            )
        })}
        <div className="view">{React.Children.toArray(children)[activeTab]}</div>
    </div>;
};

export default MyTabsComponent;

