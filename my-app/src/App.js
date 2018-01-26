import React, { Component } from 'react';
import './App.css';
import SideNavigation from './SideNavigation/SideNavigation';
import TreeNavigation from './TreeNavigation/TreeNavigation';
import PageHeader from './PageHeader/PageHeader';
import FolderList from './FolderList/FolderList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNavigation/>
        <TreeNavigation/>
        <div className="App__main">
          <PageHeader pageType="folder" />

          <FolderList/>
        </div>
      </div>
    );
  }
}

export default App;
