var Modeler = require("../Modeler.js");
var className = 'ElementSWOTAnalysis';

var ElementSWOTAnalysis = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SWOTAnalysis: {
      type: "TypeSWOTAnalysisType",
      wsdlDefinition: {
        name: "SWOTAnalysis",
        type: "SWOTAnalysisType",
        "xsd:annotation": {
          "xsd:documentation": "SWOT analysis is a strategic planning method used to evaluate the Strengths, Weaknesses, Opportunities, and Threats."
        },
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
	  SWOTAnalysis: {
      type: "TypeSWOTAnalysisType",
      wsdlDefinition: {
        name: "SWOTAnalysis",
        type: "SWOTAnalysisType",
        "xsd:annotation": {
          "xsd:documentation": "SWOT analysis is a strategic planning method used to evaluate the Strengths, Weaknesses, Opportunities, and Threats."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSWOTAnalysis;
Modeler.register(ElementSWOTAnalysis, "ElementSWOTAnalysis");
