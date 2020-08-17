var Modeler = require("../Modeler.js");
var className = 'TypeCustomTotalEmploymentType';

var TypeCustomTotalEmploymentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomTotalEmploymentType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTotalEmploymentType",
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
	  CustomTotalEmploymentType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTotalEmploymentType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomTotalEmploymentType;
Modeler.register(TypeCustomTotalEmploymentType, "TypeCustomTotalEmploymentType");
