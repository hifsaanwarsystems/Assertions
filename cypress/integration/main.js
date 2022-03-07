///<reference types="cypress"/>

const getValue=require('../fixtures/data.json')

describe('Login Test',function(){

    it('Visiting Site and Email Popup',function(){

        cy.visit(getValue.basicUrl)
        cy.get('.msc-modal__close-button').eq(1).then($button => {
            if($button.is(':visible')){
          cy.wait(3000)
          cy.get('.msc-modal__close-button').click({ 
              multiple: true, 
              force: true 
            })
           
            }
            else{
                cy.get('.active > .hero-slide > :nth-child(1) > .hero-slide__img ').scrollIntoView()
                
            } 
            
        })
        
})

it('Validation of Hero Slider',function(){
    cy.get('.msc-modal__close-button').click({force:true})
    cy.get('.active > .hero-slide > :nth-child(1) > .hero-slide__img > picture > img').should('be.visible')
})

it('Shop By Department',function(){
    cy.log("** Title Font Weight check**")
    cy.get('.default-container__0 > :nth-child(1) > :nth-child(1) > .ms-content-block > :nth-child(2) > .ms-content-block__title').should('have.css','font-weight','700')
    cy.get('[data-cy=mfrm-nsrp-sbd-item-Baby-Kids-click] > .ms-content-block__image > picture > .msc-main_image').should('have.attr','_id')

})
 it('Featured Sales',function(){
    cy.get('[aria-label="slide 2 of 5"][aria-hidden="false"] > .mfrm-content-reel__link > .mfrm-content-reel__sale > .badge-module_badge__Gl5PD').should('exist')
 })
})