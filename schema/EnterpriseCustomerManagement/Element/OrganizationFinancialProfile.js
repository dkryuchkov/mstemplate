var Modeler = require("../Modeler.js");
var className = 'ElementOrganizationFinancialProfile';

var ElementOrganizationFinancialProfile = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OrganizationFinancialProfile: {
      type: "TypeOrganizationFinancialProfileType",
      wsdlDefinition: {
        name: "OrganizationFinancialProfile",
        type: "OrganizationFinancialProfileType",
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
	  OrganizationFinancialProfile: {
      type: "TypeOrganizationFinancialProfileType",
      wsdlDefinition: {
        name: "OrganizationFinancialProfile",
        type: "OrganizationFinancialProfileType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOrganizationFinancialProfile;
Modeler.register(ElementOrganizationFinancialProfile, "ElementOrganizationFinancialProfile");
