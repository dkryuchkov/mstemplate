var Modeler = require("../Modeler.js");
var className = 'ElementSalesOpportunityReference';

var ElementSalesOpportunityReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesOpportunityReference: {
      type: "TypeSalesOpportunityReferenceType",
      wsdlDefinition: {
        name: "SalesOpportunityReference",
        type: "SalesOpportunityReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a sales opportunity for a product or service"
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
	  SalesOpportunityReference: {
      type: "TypeSalesOpportunityReferenceType",
      wsdlDefinition: {
        name: "SalesOpportunityReference",
        type: "SalesOpportunityReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a sales opportunity for a product or service"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalesOpportunityReference;
Modeler.register(ElementSalesOpportunityReference, "ElementSalesOpportunityReference");
