var Modeler = require("../Modeler.js");
var className = 'ElementParentSalesOpportunityReference';

var ElementParentSalesOpportunityReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentSalesOpportunityReference: {
      type: "TypeSalesOpportunityReferenceType",
      wsdlDefinition: {
        name: "ParentSalesOpportunityReference",
        type: "SalesOpportunityReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the parent sales opportunity for a product or service"
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
	  ParentSalesOpportunityReference: {
      type: "TypeSalesOpportunityReferenceType",
      wsdlDefinition: {
        name: "ParentSalesOpportunityReference",
        type: "SalesOpportunityReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the parent sales opportunity for a product or service"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentSalesOpportunityReference;
Modeler.register(ElementParentSalesOpportunityReference, "ElementParentSalesOpportunityReference");
