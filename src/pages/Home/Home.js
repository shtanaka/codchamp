import React from "react"
import { PageLayout } from "components/PageLayout"

import HomeStyled from "./Home.styled"

export default () => {
  return (
    <HomeStyled>
      <div className="hero">
        <div className="main-text-container">
          <h3>Lute, Prevaleça</h3>
          <h1>Reine</h1>
        </div>
      </div>
      <PageLayout>
          Hello World
      </PageLayout>
    </HomeStyled>
  )
}