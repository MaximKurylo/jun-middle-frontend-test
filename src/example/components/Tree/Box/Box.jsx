import menuList from './menuList'
import TreeView from 'react-treeview'
import EllipseSvg from '../../../assets/ellipse'
import React from 'react'

const Box = () => {
  return (
    <div className="box" >
      <div className="container" >
        <div className="header">
          <h3>Saved graphs</h3>
          <span className='plus'>+</span>
        </div>

        {menuList.map((node, i) => {
          const type = node.type
          const label = <span className="node">{type}</span>
          return (
            <TreeView
              key={`${type}${i}`}
              nodeLabel={label}
              defaultCollapsed={true}>
              {node.folder.map(({ name, age, ages, role }) => {
                return (
                  <TreeView
                    nodeLabel={ <span className="node">{name}</span>}
                    key={name}
                    defaultCollapsed={true}>
                    <div className="info" > <EllipseSvg />{age}</div>
                    <div className="info" > <EllipseSvg />{ages}<h2>⫰⫯</h2></div>
                    <div className="info" >{role}</div>
                  </TreeView>
                )
              })}
            </TreeView>
          )
        })}
      </div>
    </div>
  )
}

export default Box
