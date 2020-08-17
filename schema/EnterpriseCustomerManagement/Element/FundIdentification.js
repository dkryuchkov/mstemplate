var Modeler = require("../Modeler.js");
var className = 'ElementFundIdentification';

var ElementFundIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FundIdentification: {
      type: "TypeFundIdentificationType",
      wsdlDefinition: {
        name: "FundIdentification",
        type: "FundIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Fund"
        },
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
	  FundIdentification: {
      type: "TypeFundIdentificationType",
      wsdlDefinition: {
        name: "FundIdentification",
        type: "FundIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Fund"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFundIdentification;
Modeler.register(ElementFundIdentification, "ElementFundIdentification");
