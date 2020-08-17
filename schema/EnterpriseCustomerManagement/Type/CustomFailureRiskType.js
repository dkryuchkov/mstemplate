var Modeler = require("../Modeler.js");
var className = 'TypeCustomFailureRiskType';

var TypeCustomFailureRiskType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFailureRiskType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFailureRiskType",
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
	  CustomFailureRiskType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFailureRiskType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFailureRiskType;
Modeler.register(TypeCustomFailureRiskType, "TypeCustomFailureRiskType");
