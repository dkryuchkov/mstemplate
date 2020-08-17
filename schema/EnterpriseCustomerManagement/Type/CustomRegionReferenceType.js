var Modeler = require("../Modeler.js");
var className = 'TypeCustomRegionReferenceType';

var TypeCustomRegionReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomRegionReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRegionReferenceType",
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
	  CustomRegionReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRegionReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomRegionReferenceType;
Modeler.register(TypeCustomRegionReferenceType, "TypeCustomRegionReferenceType");
