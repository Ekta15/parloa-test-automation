import HomePge from "../../pages/HomePge"
import homedata from '../../fixtures/homedata.json'

describe('Homepage landing', () => {
  it('Open website,create customer detail and edit customer', () => {
    HomePge.openURL();
    HomePge.clickCreateCustomerButton();
    HomePge.enterCompanyName(homedata.companyName);
    HomePge.selectIndustry('finance');
    HomePge.clickIsActive();
    HomePge.enterAboutInfo(homedata.enterAboutInfo);
    HomePge.saveCustomerInfo();
    HomePge.scrollToBottom(); 
    HomePge.editCustomerInfo();
    HomePge.verifyCompanyName(homedata.companyName);

});

it('Verify Customer Info', () => {
    HomePge.openURL();

    HomePge.scrollToBottom(); 

    HomePge.editCustomerInfo();
    HomePge.verifyCompanyName('Testing1233');
    HomePge.verifyAboutInfoNotEmpty();
    HomePge.saveCustomerInfo();

  });


it('Filter condition and click delete',() =>{
    HomePge.openURL();
    HomePge.clickAll();
    HomePge.selectfiltervalue(); 
    HomePge.editfirstcustomer();
    HomePge.saveCustomerInfo();
    HomePge.deletefirstcustomer();

}) 
    }); 

