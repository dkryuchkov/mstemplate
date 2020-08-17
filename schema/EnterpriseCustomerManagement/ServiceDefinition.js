module.exports = {
  "EnterpriseCustomerManagementEBSBinding_pt": {
    "namespace": "http://xmlns.oracle.com/EnterpriseServices/Core/CustomerParty/V2",
    "serviceUrl": "https://ingosbo2o1.cmd3.cbd.extnp.national.com.au:8002/OSB_EnterpriseCustomerManagement/ProxyService/EnterpriseCustomerManagement",
    "IdRetrieve": {
      "soapAction": "QueryCustomerParty",
      "input": "ElementQueryCustomerPartyEBM",
      "output": "ElementQueryCustomerPartyResponseEBM"
    },
    "CustomerSearchAndDedupe": {
      "soapAction": "QueryCustomerPartyList",
      "input": "ElementQueryCustomerPartyListEBM",
      "output": "ElementQueryCustomerPartyListResponseEBM"
    },
    "CustomerSync": {
      "soapAction": "SyncCustomerPartyList",
      "input": "ElementSyncCustomerPartyListEBM",
      "output": "ElementSyncCustomerPartyListResponseEBM"
    },
    "FetchCustomerSyncStatus": {
      "soapAction": "FetchCustomerSyncStatus",
      "input": "ElementQueryCustomerPartyEBM",
      "output": "ElementQueryCustomerPartyResponseEBM"
    }
  }
}