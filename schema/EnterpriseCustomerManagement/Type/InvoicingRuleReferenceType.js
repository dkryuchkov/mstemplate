var Modeler = require("../Modeler.js");
var className = 'TypeInvoicingRuleReferenceType';

var TypeInvoicingRuleReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InvoicingRuleIdentification: {
      type: "TypeInvoicingRuleIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InvoicingRuleIdentification",
        type: "InvoicingRuleIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomInvoicingRuleReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomInvoicingRuleReferenceType",
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
	  InvoicingRuleIdentification: {
      type: "TypeInvoicingRuleIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InvoicingRuleIdentification",
        type: "InvoicingRuleIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomInvoicingRuleReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomInvoicingRuleReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInvoicingRuleReferenceType;
Modeler.register(TypeInvoicingRuleReferenceType, "TypeInvoicingRuleReferenceType");
