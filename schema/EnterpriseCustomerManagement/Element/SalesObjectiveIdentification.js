var Modeler = require("../Modeler.js");
var className = 'ElementSalesObjectiveIdentification';

var ElementSalesObjectiveIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesObjectiveIdentification: {
      type: "TypeSalesObjectiveIdentificationType",
      wsdlDefinition: {
        name: "SalesObjectiveIdentification",
        type: "SalesObjectiveIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a SalesObjective."
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
	  SalesObjectiveIdentification: {
      type: "TypeSalesObjectiveIdentificationType",
      wsdlDefinition: {
        name: "SalesObjectiveIdentification",
        type: "SalesObjectiveIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a SalesObjective."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalesObjectiveIdentification;
Modeler.register(ElementSalesObjectiveIdentification, "ElementSalesObjectiveIdentification");
