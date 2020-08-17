var Modeler = require("../Modeler.js");
var className = 'TypeCustomFinancialAccountSigningAuthorityType';

var TypeCustomFinancialAccountSigningAuthorityType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFinancialAccountSigningAuthorityType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialAccountSigningAuthorityType",
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
	  CustomFinancialAccountSigningAuthorityType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialAccountSigningAuthorityType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFinancialAccountSigningAuthorityType;
Modeler.register(TypeCustomFinancialAccountSigningAuthorityType, "TypeCustomFinancialAccountSigningAuthorityType");
