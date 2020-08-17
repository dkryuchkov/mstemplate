var Modeler = require("../Modeler.js");
var className = 'ElementPayEquityJobClassIdentification';

var ElementPayEquityJobClassIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PayEquityJobClassIdentification: {
      type: "TypePayEquityJobClassIdentificationType",
      wsdlDefinition: {
        name: "PayEquityJobClassIdentification",
        type: "PayEquityJobClassIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Pay Equity Job Class object"
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
	  PayEquityJobClassIdentification: {
      type: "TypePayEquityJobClassIdentificationType",
      wsdlDefinition: {
        name: "PayEquityJobClassIdentification",
        type: "PayEquityJobClassIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Pay Equity Job Class object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPayEquityJobClassIdentification;
Modeler.register(ElementPayEquityJobClassIdentification, "ElementPayEquityJobClassIdentification");
