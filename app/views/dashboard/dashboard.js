import React from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import style from './dashboard.css'
import { Button } from 'antd'

function Dashboard ({ match }) {
  return (
    <div>
      <div className={style.layout}>
        <div className={style.aside}>
          <h1>side bar</h1>
          <Button type="primary">Primary</Button>
          <div><Link to="/admin/withdraw">提现管理</Link></div>
          <div><Link to="/admin/about">关于</Link></div>
        </div>
        <div className={style.main}>
          <Switch>
            <Route exact path={`${match.path}/withdraw`} render={() => <h1>提现管理页面</h1>} />
            <Route exact path={`${match.path}/about`} render={() => <h1>关于页面</h1>} />
            <Redirect to="/404" />
          </Switch>
        </div>
      </div>

    </div>
  )
}

export default Dashboard

