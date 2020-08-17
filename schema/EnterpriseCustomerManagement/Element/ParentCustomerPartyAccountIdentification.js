var Modeler = require("../Modeler.js");
var className = 'ElementParentCustomerPartyAccountIdentification';

var ElementParentCustomerPartyAccountIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentCustomerPartyAccountIdentification: {
      type: "TypeCustomerPartyAccountIdentificationType",
      wsdlDefinition: {
        name: "ParentCustomerPartyAccountIdentification",
        type: "CustomerPartyAccountIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ParentCustomerPartyAccountIdentification: {
      type: "TypeCustomerPartyAccountIdentificationType",
      wsdlDefinition: {
        name: "ParentCustomerPartyAccountIdentification",
        type: "CustomerPartyAccountIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentCustomerPartyAccountIdentification;
Modeler.register(ElementParentCustomerPartyAccountIdentification, "ElementParentCustomerPartyAccountIdentification");
