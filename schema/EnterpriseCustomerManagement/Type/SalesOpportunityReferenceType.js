var Modeler = require("../Modeler.js");
var className = 'TypeSalesOpportunityReferenceType';

var TypeSalesOpportunityReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesOpportunityIdentification: {
      type: "TypeSalesOpportunityIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SalesOpportunityIdentification",
        type: "SalesOpportunityIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomSalesOpportunityReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomSalesOpportunityReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:SalesOpportunityIdentification",
        type: "SalesOpportunityIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomSalesOpportunityReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomSalesOpportunityReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSalesOpportunityReferenceType;
Modeler.register(TypeSalesOpportunityReferenceType, "TypeSalesOpportunityReferenceType");
