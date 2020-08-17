var Modeler = require("../Modeler.js");
var className = 'TypeListOfKYCSummaryType';

var TypeListOfKYCSummaryType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  KYCSummary: {
      type: "TypeKYCHistoryType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:KYCSummary",
        type: "KYCHistoryType",
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
	  KYCSummary: {
      type: "TypeKYCHistoryType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:KYCSummary",
        type: "KYCHistoryType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfKYCSummaryType;
Modeler.register(TypeListOfKYCSummaryType, "TypeListOfKYCSummaryType");
