var Modeler = require("../Modeler.js");
var className = 'ElementRelatedCustomerPartyAccountIdentification';

var ElementRelatedCustomerPartyAccountIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RelatedCustomerPartyAccountIdentification: {
      type: "TypeCustomerPartyAccountIdentificationType",
      wsdlDefinition: {
        name: "RelatedCustomerPartyAccountIdentification",
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
	  RelatedCustomerPartyAccountIdentification: {
      type: "TypeCustomerPartyAccountIdentificationType",
      wsdlDefinition: {
        name: "RelatedCustomerPartyAccountIdentification",
        type: "CustomerPartyAccountIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRelatedCustomerPartyAccountIdentification;
Modeler.register(ElementRelatedCustomerPartyAccountIdentification, "ElementRelatedCustomerPartyAccountIdentification");
