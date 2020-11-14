import React from "react"
import { PageLayout } from "components/PageLayout"

import HomeStyled from "./Home.styled"

export default () => {
  return (
    <HomeStyled>
      <div className="hero">
        <div className="bg-img" />
        <div className="main-text-container">
          <h2>LUTE, PREVALEÇA</h2>
          <h1>REINE</h1>
        </div>
      </div>
      <PageLayout>
        <div className="content">
          <h3>Destaques</h3>
          <p></p>
          <h3>Classificação</h3>
        </div>
      </PageLayout>
    </HomeStyled>
  )
}