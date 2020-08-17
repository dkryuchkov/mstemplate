var Modeler = require("../Modeler.js");
var className = 'TypeWarningIndicatorsType';

var TypeWarningIndicatorsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WarningIndicator: {
      type: "TypeWarningIndicatorType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:WarningIndicator",
        type: "WarningIndicatorType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  WarningIndicator: {
      type: "TypeWarningIndicatorType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:WarningIndicator",
        type: "WarningIndicatorType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeWarningIndicatorsType;
Modeler.register(TypeWarningIndicatorsType, "TypeWarningIndicatorsType");
