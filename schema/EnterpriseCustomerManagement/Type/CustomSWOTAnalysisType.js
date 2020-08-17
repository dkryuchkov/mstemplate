var Modeler = require("../Modeler.js");
var className = 'TypeCustomSWOTAnalysisType';

var TypeCustomSWOTAnalysisType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSWOTAnalysisType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSWOTAnalysisType",
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
	  CustomSWOTAnalysisType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSWOTAnalysisType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSWOTAnalysisType;
Modeler.register(TypeCustomSWOTAnalysisType, "TypeCustomSWOTAnalysisType");
