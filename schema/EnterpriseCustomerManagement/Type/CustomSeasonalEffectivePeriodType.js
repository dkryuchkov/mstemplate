var Modeler = require("../Modeler.js");
var className = 'TypeCustomSeasonalEffectivePeriodType';

var TypeCustomSeasonalEffectivePeriodType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSeasonalEffectivePeriodType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSeasonalEffectivePeriodType",
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
	  CustomSeasonalEffectivePeriodType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSeasonalEffectivePeriodType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSeasonalEffectivePeriodType;
Modeler.register(TypeCustomSeasonalEffectivePeriodType, "TypeCustomSeasonalEffectivePeriodType");
