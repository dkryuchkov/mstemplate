var Modeler = require("../Modeler.js");
var className = 'TypeResponseFilterType';

var TypeResponseFilterType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QualifiedElementPath: {
      type: "TypeStringType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        name: "WL5G3N2:QualifiedElementPath",
        type: "StringType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    exclusionIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        name: "exclusionIndicator",
        type: "IndicatorType",
        use: "optional",
        attribute: true
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
	  QualifiedElementPath: {
      type: "TypeStringType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        name: "WL5G3N2:QualifiedElementPath",
        type: "StringType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    exclusionIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        name: "exclusionIndicator",
        type: "IndicatorType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeResponseFilterType;
Modeler.register(TypeResponseFilterType, "TypeResponseFilterType");
