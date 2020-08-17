var Modeler = require("../Modeler.js");
var className = 'ElementFinancialInstitutionReference';

var ElementFinancialInstitutionReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialInstitutionReference: {
      type: "TypeFinancialInstitutionReferenceType",
      wsdlDefinition: {
        name: "FinancialInstitutionReference",
        type: "FinancialInstitutionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A generic term for banks, trust companies, credit unions, and perhaps other investment companies that deal with money, hold money, invest money and lend money"
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
	  FinancialInstitutionReference: {
      type: "TypeFinancialInstitutionReferenceType",
      wsdlDefinition: {
        name: "FinancialInstitutionReference",
        type: "FinancialInstitutionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A generic term for banks, trust companies, credit unions, and perhaps other investment companies that deal with money, hold money, invest money and lend money"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFinancialInstitutionReference;
Modeler.register(ElementFinancialInstitutionReference, "ElementFinancialInstitutionReference");
