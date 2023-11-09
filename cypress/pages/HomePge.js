class HomePge {
    openURL() {
      cy.visit(Cypress.env('URL'));
    }
  
    clickCreateCustomerButton() {
      cy.get('button[class="ant-btn ant-btn-primary"]').click();
    }
  
    enterCompanyName(companyName) {
      cy.get('#company').type(companyName);
    }
  
    selectIndustry(industry) {
      cy.get('#industry').click();
      cy.get('div.ant-select-item-option-content').contains(industry).click();
    }
  
    clickIsActive() {
      cy.get('[id="isActive"]').click();
    }
  
    enterAboutInfo(aboutInfo) {
      cy.get('#about').type(aboutInfo);
    }
  
    saveCustomerInfo() {
      cy.get('.ant-modal-footer > .ant-btn-primary > span').click();
    }
  
    scrollToBottom() {
      cy.scrollTo('bottom');
    }
  
    editCustomerInfo() {
      cy.get('div:nth-child(24) > div > div.customer_company-info__7R5zs > div > span.anticon.anticon-edit').click();
    }
  
    verifyCompanyName(companyName) {
      cy.get('#company').should('have.value', companyName);
    }
  
    verifyAboutInfoNotEmpty() {
      cy.get('#about').should('not.be.empty');
    }
  
    clickAll() {
        
      cy.get('.ant-select-selector:first').click();
    }
  
    selectfiltervalue() {
      cy.get('div.ant-select-item-option-content').contains('tech').click({ force: true });
    }

    editfirstcustomer(){
        cy.get('div > span.anticon.anticon-edit').eq(0).click();
    }
   
   
    deletefirstcustomer(){
        cy.get('div > span.anticon.anticon-delete').eq(0).click(); 
    }


  }
  
  export default new HomePge();