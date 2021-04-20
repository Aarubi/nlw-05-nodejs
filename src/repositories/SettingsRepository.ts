import { EntityRepository, Repository } from "typeorm";

import { Settings } from "../entities/Settings";

@EntityRepository(Settings)
class SettingsRepository extends Repository<Settings> {

}

export { SettingsRepository }



