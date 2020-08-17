var Modeler = require("../Modeler.js");
var className = 'TypeCustomMilitaryEmploymentType';

var TypeCustomMilitaryEmploymentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomMilitaryEmploymentType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomMilitaryEmploymentType",
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
	  CustomMilitaryEmploymentType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomMilitaryEmploymentType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomMilitaryEmploymentType;
Modeler.register(TypeCustomMilitaryEmploymentType, "TypeCustomMilitaryEmploymentType");
