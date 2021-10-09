import TreeView from 'react-treeview'
import React from 'react'
import "react-treeview/react-treeview.css"

import EllipseSvg from '../../assets/ellipse'
import menuList from './menuList'
import  './styles.css'
import MenuHeader from './MenuHeader'


const Menu = () => {

  return (
    <>
      <MenuHeader/>
        {menuList.map((node, i) => {
          const type = node.type
          const label = <span className="node">{type}</span>
          return (
            <TreeView
              key={`${type}${i}`}
              nodeLabel={label}
              defaultCollapsed={true}>
              {node.folder.map(({ name, age, ages, }) => {
                return (
                  <TreeView
                    nodeLabel={ <span className="node">{name}</span>}
                    key={name}
                    defaultCollapsed={true}>
                    <div className="info" > <EllipseSvg />{age}</div>
                    <div className="info" > <EllipseSvg />{ages}<h2>⫰⫯</h2></div>

                  </TreeView>
                )
              })}
            </TreeView>
          )
        })}
      </>

  )
}

export default Menu
