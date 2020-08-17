var Modeler = require("../Modeler.js");
var className = 'TypePercentToleranceType';

var TypePercentToleranceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UnderPercent: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:UnderPercent",
        type: "PercentType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OverPercent: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OverPercent",
        type: "PercentType",
        attribute: false,
        ns: "WL5G3N2"
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
	  UnderPercent: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:UnderPercent",
        type: "PercentType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OverPercent: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OverPercent",
        type: "PercentType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePercentToleranceType;
Modeler.register(TypePercentToleranceType, "TypePercentToleranceType");
