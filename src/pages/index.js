import React from "react"
import Layout from '../components/Layout';
import { ExampleButton } from '../components/button';
export default () => (
  <Layout>
    <h1 style={{ color: "green", textTransform: "uppercase" }}>
      Hello from gatsby!
    </h1>
    <h1>Hello world!</h1>
    <h1>Hello people!</h1>
    <ExampleButton>Click Here!</ExampleButton>
  </Layout>
)