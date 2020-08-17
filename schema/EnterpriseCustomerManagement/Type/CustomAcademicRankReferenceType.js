var Modeler = require("../Modeler.js");
var className = 'TypeCustomAcademicRankReferenceType';

var TypeCustomAcademicRankReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomAcademicRankReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomAcademicRankReferenceType",
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
	  CustomAcademicRankReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomAcademicRankReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomAcademicRankReferenceType;
Modeler.register(TypeCustomAcademicRankReferenceType, "TypeCustomAcademicRankReferenceType");
