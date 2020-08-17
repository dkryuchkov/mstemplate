var Modeler = require("../Modeler.js");
var className = 'ElementSalesOpportunityIdentification';

var ElementSalesOpportunityIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesOpportunityIdentification: {
      type: "TypeSalesOpportunityIdentificationType",
      wsdlDefinition: {
        name: "SalesOpportunityIdentification",
        type: "SalesOpportunityIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Sales Opportunity"
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
	  SalesOpportunityIdentification: {
      type: "TypeSalesOpportunityIdentificationType",
      wsdlDefinition: {
        name: "SalesOpportunityIdentification",
        type: "SalesOpportunityIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Sales Opportunity"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalesOpportunityIdentification;
Modeler.register(ElementSalesOpportunityIdentification, "ElementSalesOpportunityIdentification");
