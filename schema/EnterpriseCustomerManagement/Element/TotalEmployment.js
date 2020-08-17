var Modeler = require("../Modeler.js");
var className = 'ElementTotalEmployment';

var ElementTotalEmployment = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TotalEmployment: {
      type: "TypeTotalEmploymentType",
      wsdlDefinition: {
        name: "TotalEmployment",
        type: "TotalEmploymentType",
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
	  TotalEmployment: {
      type: "TypeTotalEmploymentType",
      wsdlDefinition: {
        name: "TotalEmployment",
        type: "TotalEmploymentType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTotalEmployment;
Modeler.register(ElementTotalEmployment, "ElementTotalEmployment");
