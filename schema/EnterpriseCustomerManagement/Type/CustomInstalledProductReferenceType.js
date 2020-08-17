var Modeler = require("../Modeler.js");
var className = 'TypeCustomInstalledProductReferenceType';

var TypeCustomInstalledProductReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomInstalledProductReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomInstalledProductReferenceType",
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
	  CustomInstalledProductReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomInstalledProductReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomInstalledProductReferenceType;
Modeler.register(TypeCustomInstalledProductReferenceType, "TypeCustomInstalledProductReferenceType");
