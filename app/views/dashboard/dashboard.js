import React from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import style from './dashboard.css'
import { Layout, Menu } from 'antd'

const { Header, Content, Footer, Sider } = Layout

function Dashboard ({ match }) {
  return (
    <Layout className={style.layout}>
      <Header className={style.header}>
        <div className={style.logo} />
        <div className={style.headerText}>管理后台</div>
      </Header>
      <Layout>
        <Sider className={style.sider}>
          <Menu
            className={style.siderMenu}
            mode="inline"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1"><Link to="/admin/withdraw">提现管理</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/admin/about">关于我们</Link></Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content className={style.content}>
            <Switch>
              <Route exact path={`${match.path}/`} render={() => <h1>提现管理页面</h1>} />
              <Route exact path={`${match.path}/withdraw`} render={() => <h1>提现管理页面</h1>} />
              <Route exact path={`${match.path}/about`} render={() => <h1>关于页面</h1>} />
              <Redirect to="/404" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
      <Footer className={style.footer}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
}

export default Dashboard

