var Modeler = require("../Modeler.js");
var className = 'ElementPersonFinancialProfile';

var ElementPersonFinancialProfile = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PersonFinancialProfile: {
      type: "TypePersonFinancialProfileType",
      wsdlDefinition: {
        name: "PersonFinancialProfile",
        type: "PersonFinancialProfileType",
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
	  PersonFinancialProfile: {
      type: "TypePersonFinancialProfileType",
      wsdlDefinition: {
        name: "PersonFinancialProfile",
        type: "PersonFinancialProfileType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPersonFinancialProfile;
Modeler.register(ElementPersonFinancialProfile, "ElementPersonFinancialProfile");
