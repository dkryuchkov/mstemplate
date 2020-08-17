var Modeler = require("../Modeler.js");
var className = 'TypeCustomSupplierPartyTradingLocationProfileReferenceType';

var TypeCustomSupplierPartyTradingLocationProfileReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSupplierPartyTradingLocationProfileReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSupplierPartyTradingLocationProfileReferenceType",
        attribute: false,
        type: "xsd:string"
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
	  CustomSupplierPartyTradingLocationProfileReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSupplierPartyTradingLocationProfileReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSupplierPartyTradingLocationProfileReferenceType;
Modeler.register(TypeCustomSupplierPartyTradingLocationProfileReferenceType, "TypeCustomSupplierPartyTradingLocationProfileReferenceType");
