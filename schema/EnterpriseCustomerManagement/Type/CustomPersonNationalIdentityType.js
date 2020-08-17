var Modeler = require("../Modeler.js");
var className = 'TypeCustomPersonNationalIdentityType';

var TypeCustomPersonNationalIdentityType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPersonNationalIdentityType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPersonNationalIdentityType",
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
	  CustomPersonNationalIdentityType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPersonNationalIdentityType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPersonNationalIdentityType;
Modeler.register(TypeCustomPersonNationalIdentityType, "TypeCustomPersonNationalIdentityType");
